'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
 import Dropcursor from '@tiptap/extension-dropcursor';

import { useEffect } from 'react';
import {
  FaBold,
  FaItalic,
  FaListUl,
  FaHeading,
  FaUnderline,
  FaUndo,
  FaRedo,
  FaImage,
  FaTable,
  FaMinus,
} from 'react-icons/fa';

export default function Editor({ value = '', onChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Dropcursor,
      // Placeholder.configure({
      //   placeholder: 'Start writing your blog...',
      // }),
      Image.configure({ inline: false }),
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: value,
    editorProps: {
      handleDrop(view, event) {
        const file = event.dataTransfer?.files?.[0];
        if (file) {
          uploadImage(file);
          return true;
        }
        return false;
      },
      handleDOMEvents: {
        paste(view, event) {
          const items = event.clipboardData?.items;
          for (const item of items) {
            if (item.type.includes('image')) {
              uploadImage(item.getAsFile());
              return true;
            }
          }
          return false;
        },
      },
    },
    onUpdate({ editor }) {
      const html = editor.getHTML();
      onChange?.(html); // onChange is triggered manually, no debounce needed
    },
  });

  const uploadImage = async (file) => {
    if (!file || !editor) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append(
      'upload_preset',
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
    );

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const data = await res.json();
    if (data?.secure_url) {
      editor.chain().focus().setImage({ src: data.secure_url }).run();
    }
  };

  if (!editor) return null;

  return (
    <div className="border rounded-md bg-white shadow-sm overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 px-4 py-2 border-b bg-gray-50">
        <IconBtn icon={<FaBold />} onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive('bold')} />
        <IconBtn icon={<FaItalic />} onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive('italic')} />
        <IconBtn icon={<FaUnderline />} onClick={() => editor.chain().focus().toggleUnderline?.().run()} />
        <IconBtn icon={<FaListUl />} onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive('bulletList')} />
        <IconBtn icon={<FaHeading />} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={editor.isActive('heading', { level: 2 })} />
        <IconBtn icon={<FaMinus />} onClick={() => editor.chain().focus().setHorizontalRule().run()} />
        <IconBtn icon={<FaUndo />} onClick={() => editor.chain().focus().undo().run()} />
        <IconBtn icon={<FaRedo />} onClick={() => editor.chain().focus().redo().run()} />
        <IconBtn icon={<FaTable />} onClick={() => editor.chain().focus().insertTable({ rows: 2, cols: 2 }).run()} />
        <label className="cursor-pointer">
          <span className="inline-flex items-center gap-1 px-2 py-1 border rounded hover:bg-gray-200">
            <FaImage /> Upload
          </span>
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => uploadImage(e.target.files[0])}
          />
        </label>
      </div>

      {/* Editor Content */}
      <EditorContent
        editor={editor}
        className="prose max-w-none px-4 py-3 min-h-[300px] focus:outline-none"
      />
    </div>
  );
}

function IconBtn({ icon, onClick, active }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center justify-center px-2 py-1 border rounded hover:bg-gray-200 ${
        active ? 'bg-gray-300' : ''
      }`}
    >
      {icon}
    </button>
  );
}
