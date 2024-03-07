"use client";
import clsx from "clsx";
import { useState } from "react";
import { DropzoneOptions, useDropzone } from "react-dropzone";
import { IoIosPause, IoMdClose } from "react-icons/io";

const UploadImages = () => {
  const [files, setFiles] = useState<any>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileToDelete, setFileToDelete] = useState<any>(null);

  const dzOptions: DropzoneOptions = {
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/jpg": [],
    },
    maxFiles: 4,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
    noClick: true,
    noKeyboard: true,
  };

  const { open, getRootProps, getInputProps } = useDropzone(dzOptions);

  const onDelete = (file: any) => {
    setFileToDelete(file);
    setIsModalOpen(true);
  };

  const onConfirmDelete = () => {
    setFiles(files.filter((f: any) => f.name !== fileToDelete.name));
    setFileToDelete(null);
    setIsModalOpen(false);
  };

  const onCancelDelete = () => {
    setFileToDelete(null);
    setIsModalOpen(false);
  };

  return (
    <main className="relative min-h-screen bg-slate-200">
      <div className="absolute left-1/2 top-1/2 w-[600px] -translate-x-1/2 -translate-y-1/2 space-y-4 rounded-xl bg-white p-6 shadow-lg">
        <h1 className="font-bold tracking-wide">Upload Images</h1>

        <div
          className="flex h-[200px] flex-col items-center justify-center rounded-xl border-2 border-dashed bg-slate-50 p-4 duration-200 ease-in-out"
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <p>
            Drop your images here or{" "}
            <button onClick={open} className="text-[#6e41e2] hover:underline">
              browse
            </button>
          </p>
          <span className="text-xs opacity-50">PNG, JPG or JPEG</span>
        </div>

        {files.length > 0 && <hr />}

        <div
          className="max-h-[340px] space-y-4 overflow-y-auto pr-2"
          style={{ scrollbarGutter: "stable" }}
        >
          {files.map((file: any) => (
            <Attachment key={file.name} file={file} onDelete={onDelete} />
          ))}
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onConfirmDelete={onConfirmDelete}
        onCancelDelete={onCancelDelete}
      />
    </main>
  );
};

export default UploadImages;

const Attachment = ({
  file,
  onDelete,
}: {
  file: any;
  onDelete: (file: any) => void;
}) => {
  return (
    <div className="flex items-center gap-4">
      <div className="h-16 w-16 overflow-hidden rounded-lg">
        <img
          className="h-full w-full object-cover"
          src={file.preview}
          alt={file.name}
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-sm">{file.name}</span>
            <span className="text-xs opacity-50">{file.size}</span>
          </div>
          <div className="space-x-2">
            <button className="opacity-50 duration-150 ease-in-out hover:opacity-100">
              <IoIosPause className="h-6 w-6" />
            </button>
            <button
              onClick={() => onDelete(file)}
              className="opacity-50 duration-150 ease-in-out hover:opacity-100"
            >
              <IoMdClose className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-full rounded-full bg-gray-200" />
          <span className="text-sm text-gray-400">0%</span>
        </div>
      </div>
    </div>
  );
};

const Modal = ({
  isOpen,
  onConfirmDelete,
  onCancelDelete,
}: {
  isOpen: boolean;
  onConfirmDelete: () => void;
  onCancelDelete: () => void;
}) => {
  return (
    <>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-slate-900 bg-opacity-10 backdrop-blur-sm" />
          <div className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform space-y-4 rounded-lg bg-white p-6 shadow-md">
            <p>Are you sure you want to delete uploaded picture?</p>
            <div className="flex items-center justify-center gap-4">
              <button
                className="rounded-lg bg-slate-100 px-2 py-1 shadow-md duration-150 ease-in-out hover:bg-slate-300"
                onClick={onCancelDelete}
              >
                Cancel
              </button>
              <button
                className="rounded-lg bg-red-500 px-2 py-1 text-slate-50 shadow-md duration-150 ease-in-out hover:bg-red-800"
                onClick={onConfirmDelete}
              >
                Confirm
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};
