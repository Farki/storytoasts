import React, { JSX, useCallback } from "react";
import { ErrorCode, FileRejection, useDropzone } from "react-dropzone";
import { Image as ImageIcon, ImageDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  id: number;
  setValue: any;
  isError: boolean;
  imageUrl: string;
};

enum CustomErrorCode {
  ImageInvalidDimensions = "image-invalid-dimensions",
}
type FileUploadErrorCode = ErrorCode | CustomErrorCode;

const ALLOWED_WIDTH = 300;
const ALLOWED_HEIGHT = 300;

export default function FileUpload({ id, imageUrl, setValue, isError }: Props) {
  const [filePreview, setFilePreview] = React.useState<string | null>(imageUrl);
  const [fileError, setFileError] = React.useState<FileUploadErrorCode | null>(
    null,
  );

  const validateImageDimensions = (file: File): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        if (
          img.naturalHeight === ALLOWED_WIDTH &&
          img.naturalWidth === ALLOWED_HEIGHT
        ) {
          resolve(true);
        } else {
          setFileError(CustomErrorCode.ImageInvalidDimensions);
          resolve(false);
        }
      };
      img.onerror = () => {
        console.error("error uploading img");
        resolve(false);
      };
    });
  };

  const onDrop = useCallback(
    async (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      const acceptedFile = acceptedFiles[0];

      if (fileRejections.length > 0) {
        setValue(`toasts.${id}.image`, null);
        setFilePreview(null);
        setFileError(
          fileRejections.map((f) => f.errors[0].code as ErrorCode)?.[0],
        );
        return;
      }

      const isValid = await validateImageDimensions(acceptedFile);

      if (acceptedFile && isValid) {
        setFilePreview(URL.createObjectURL(acceptedFile));
        setValue(`toasts.${id}.image`, acceptedFile);
        setFileError(null);
      }
    },
    [setValue],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    useFsAccessApi: false,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
    },
    maxSize: 1 * 1024 * 1024, // 1 MB in bytes
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className={cn(
        `group h-full w-full cursor-pointer rounded-xl border-2 border-dashed ${isDragActive ? "border-blue-500/50" : "border-gray-400/30"} text-center transition-colors hover:border-blue-500/50 ${isError ? "border-red-500/50" : "border-gray-400/30"}`,
      )}
    >
      <input {...getInputProps()} />

      {isDragActive ? (
        <div className="flex h-full items-center justify-center">
          <ImageDown
            className={cn(isError ? "text-red-500" : "text-blue-500/50")}
          />
        </div>
      ) : (
        <div className="flex h-full flex-col items-center justify-center">
          {filePreview ? (
            <img
              src={filePreview}
              alt="Preview"
              className="w-max rounded object-contain"
            />
          ) : (
            <>
              <ImageIcon
                className={cn(
                  isError
                    ? "text-red-500 group-hover:text-blue-500/50"
                    : "text-gray-600/50 transition-colors group-hover:text-blue-500/50",
                )}
              />
              <span className="text-[0.6rem] text-gray-600">{`${ALLOWED_WIDTH}x${ALLOWED_HEIGHT}px`}</span>
              <span className="text-[0.6rem] text-gray-600">{`1MB`}</span>
            </>
          )}
        </div>
      )}

      {fileError && createFileError(fileError)}
    </div>
  );
}

const createFileError = (
  fileError: FileUploadErrorCode,
): JSX.Element | null => {
  if (fileError === ErrorCode.FileTooLarge)
    return <span className="text-sm text-red-500">{"max 1MB"}</span>;

  if (fileError === ErrorCode.FileInvalidType)
    return <span className="text-sm text-red-500">{"png/jpg"}</span>;

  if (fileError === ErrorCode.TooManyFiles)
    return <span className="text-xs text-red-500">{"max 1 img"}</span>;

  if (fileError === CustomErrorCode.ImageInvalidDimensions)
    return (
      <span className="text-xs text-red-500">{`${ALLOWED_WIDTH}x${ALLOWED_HEIGHT}px`}</span>
    );

  return <span className="text-sm text-red-500">{"try again"}</span>;
};
