"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
 import slugify from "slugify";

 import RichTextEditor from './RichTextEditor'
export default function BlogForm({ initialData = {}, onSubmit }) {
  const [uploading, setUploading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    urlSlug: "",

    image: "",
    video: "",
    category: "",
    subCategory: "",
    subSubCategory: "",
    metaTitle: "",
    metaDescription: "",
    canonicalUrl: "",
    connectedServices: [],
    relatedBlog: "",
    content: "",
    schemaMarkup: "",
    faqs: [],
    locations: "",
    businessName: "",
    address: "",
    phone: "",
    websiteName: "",
    serviceSpecificPage: "",
    focusKeyword: "",
    author: "",
    status: "visible",
    ...initialData,
  });

  // Auto-generate urlSlug only on initial title input if urlSlug is not set
  useEffect(() => {
    if (!initialData.urlSlug) {
      setForm((prev) => ({
        ...prev,
        urlSlug: slugify(prev.title || "", { lower: true, strict: true }),
      }));
    }
  }, [form.title]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      urlSlug: form.urlSlug,
  content: typeof form.content === 'object' ? JSON.stringify(form.content) : form.content,


      focusKeyword: form.focusKeyword
        ? form.focusKeyword.split(",").map((k) => k.trim())
        : [],
      locations: form.locations
        ? form.locations.split(",").map((l) => l.trim())
        : [],
      relatedBlog: form.relatedBlog
        ? form.relatedBlog.split(",").map((r) => r.trim())
        : [],
    };
    await onSubmit(payload);
  };

  const addFAQ = () => {
    setForm({ ...form, faqs: [...form.faqs, { question: "", answer: "" }] });
  };

  const updateFAQ = (index, key, value) => {
    const newFaqs = [...form.faqs];
    newFaqs[index][key] = value;
    setForm({ ...form, faqs: newFaqs });
  };

  const removeFAQ = (index) => {
    const newFaqs = [...form.faqs];
    newFaqs.splice(index, 1);
    setForm({ ...form, faqs: newFaqs });
  };

  const addService = () => {
    setForm({
      ...form,
      connectedServices: [...form.connectedServices, { name: "", link: "" }],
    });
  };

  const updateService = (index, key, value) => {
    const newServices = [...form.connectedServices];
    newServices[index][key] = value;
    setForm({ ...form, connectedServices: newServices });
  };

  const removeService = (index) => {
    const newServices = [...form.connectedServices];
    newServices.splice(index, 1);
    setForm({ ...form, connectedServices: newServices });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md"
    >
      <h1 className="text-3xl font-bold mb-6">📝 Blog Editor</h1>

      {/* Basic Info */}
      <Section title="Basic Info">
        <Input
          label="Page Title"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
        <Input
          label="URL Slug (editable)"
          name="urlSlug"
          value={form.urlSlug}
          onChange={handleChange}
        />
        <Select
          label="Status"
          name="status"
          value={form.status}
          onChange={handleChange}
          options={["visible", "hidden"]}
        />
        <Input
          label="Author Name"
          name="author"
          value={form.author}
          onChange={handleChange}
        />
        <Input
          label="Website Name"
          name="websiteName"
          value={form.websiteName}
          onChange={handleChange}
        />
        <div className="mb-5">
          <label className="block mb-1 font-medium text-gray-700">
            Image Upload
          </label>

          {form.image && (
            <div className="mb-3">
              <img
                src={form.image}
                alt="Uploaded"
                className="w-48 h-auto rounded shadow"
              />
            </div>
          )}

          <input
            type="file"
            accept="image/*"
            onChange={async (e) => {
              const file = e.target.files[0];
              if (!file) return;

              setUploading(true);

              const formData = new FormData();
              formData.append("file", file);
              formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);

              try {
                const res = await fetch(
                  "https://api.cloudinary.com/v1_1/ddyipfa75/image/upload",
                  {
                    method: "POST",
                    body: formData,
                  }
                );

                const data = await res.json();
                if (data.secure_url) {
                  setForm({ ...form, image: data.secure_url });
                } else {
                  alert("Image upload failed");
                }
              } catch (error) {
                console.error("Upload error", error);
                alert("An error occurred during upload");
              } finally {
                setUploading(false);
              }
            }}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />

          {uploading && (
            <p className="text-sm text-blue-500 mt-1">Uploading...</p>
          )}
        </div>

        <Input
          label="Video URL (YouTube)"
          name="video"
          value={form.video}
          onChange={handleChange}
        />
      </Section>

      {/* Categories */}
      <Section title="Categories">
        <Select
          label="Category"
          name="category"
          value={form.category}
          onChange={handleChange}
          options={["Business", "Legal", "Marketing"]}
        />
        <Select
          label="Sub Category"
          name="subCategory"
          value={form.subCategory}
          onChange={handleChange}
          options={["Startup", "SME", "Ecommerce"]}
        />
        <Select
          label="Sub Sub Category"
          name="subSubCategory"
          value={form.subSubCategory}
          onChange={handleChange}
          options={["Beginner", "Advanced", "Pro"]}
        />
      </Section>

      {/* SEO */}
      <Section title="SEO Metadata">
        <Input
          label="Meta Title"
          name="metaTitle"
          value={form.metaTitle}
          onChange={handleChange}
        />
        <Input
          label="Meta Description"
          name="metaDescription"
          value={form.metaDescription}
          onChange={handleChange}
        />
        <Input
          label="Canonical URL"
          name="canonicalUrl"
          value={form.canonicalUrl}
          onChange={handleChange}
        />
      </Section>

      {/* Business Info */}
      <Section title="Business Details">
        <Input
          label="Business Name"
          name="businessName"
          value={form.businessName}
          onChange={handleChange}
        />
        <Input
          label="Address"
          name="address"
          value={form.address}
          onChange={handleChange}
        />
        <Input
          label="Phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
      </Section>

      {/* Connected Services */}
      <Section title="Connected Services">
        {form.connectedServices.map((service, idx) => (
          <div key={idx} className="mb-3 flex gap-3 items-center">
            <input
              placeholder="Service Name"
              value={service.name}
              onChange={(e) => updateService(idx, "name", e.target.value)}
              className="border border-gray-300 p-2 rounded w-1/2"
            />
            <input
              placeholder="Service Link"
              value={service.link}
              onChange={(e) => updateService(idx, "link", e.target.value)}
              className="border border-gray-300 p-2 rounded w-1/2"
            />
            <button
              type="button"
              onClick={() => removeService(idx)}
              className="text-red-500"
            >
              🗑️
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addService}
          className="text-blue-600 mt-2"
        >
          + Add Service
        </button>
      </Section>

      {/* Rich Content */}
      <Section title="Content">
        <RichTextEditor
          value={form.content}
          onChange={(val) => setForm({ ...form, content: val })}
        />
      </Section>

      {/* Schema Markup */}
      <Section title="Schema Markup">
        <textarea
          name="schemaMarkup"
          placeholder="Paste JSON-LD here"
          rows={4}
          value={form.schemaMarkup}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-3 font-mono"
        />
      </Section>

      {/* Related Info */}
      <Section title="Advanced & Related">
        <Input
          label="Focus Keywords (comma separated)"
          name="focusKeyword"
          value={form.focusKeyword}
          onChange={handleChange}
        />
        <Input
          label="Locations (comma separated)"
          name="locations"
          value={form.locations}
          onChange={handleChange}
        />
        <Input
          label="Service Specific Page URL"
          name="serviceSpecificPage"
          value={form.serviceSpecificPage}
          onChange={handleChange}
        />
        <Input
          label="Related Blog Slugs (comma separated)"
          name="relatedBlog"
          value={form.relatedBlog}
          onChange={handleChange}
        />
      </Section>

      {/* FAQs */}
      <Section title="FAQs">
        {form.faqs.map((faq, idx) => (
          <div key={idx} className="mb-4 border p-3 rounded relative">
            <Input
              label={`Question ${idx + 1}`}
              value={faq.question}
              placeholder="Question"
              onChange={(e) => updateFAQ(idx, "question", e.target.value)}
            />
            <Input
              placeholder="Answer"
              value={faq.answer}
              onChange={(e) => updateFAQ(idx, "answer", e.target.value)}
            />
            <button
              type="button"
              onClick={() => removeFAQ(idx)}
              className="absolute top-2 right-3 text-red-500"
            >
              🗑️
            </button>
          </div>
        ))}
        <button type="button" onClick={addFAQ} className="text-blue-600 mt-2">
          + Add FAQ
        </button>
      </Section>

      {/* Submit */}
      <button
        type="submit"
        className="bg-black text-white px-6 py-3 rounded-md mt-6 hover:bg-gray-800"
      >
        🚀 Publish Blog
      </button>
    </form>
  );
}

// Reusable Components
function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h3 className="text-lg font-semibold mb-4 border-b pb-1">{title}</h3>
      {children}
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div className="mb-5">
      {label && (
        <label className="block mb-1 font-medium text-gray-700">{label}</label>
      )}
      <input
        {...props}
        className="w-full border border-gray-300 rounded px-4 py-2"
      />
    </div>
  );
}

function Select({ label, options = [], ...props }) {
  return (
    <div className="mb-5">
      <label className="block mb-1 font-medium text-gray-700">{label}</label>
      <select
        {...props}
        className="w-full border border-gray-300 rounded px-4 py-2"
      >
        <option value="">Select {label}</option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
