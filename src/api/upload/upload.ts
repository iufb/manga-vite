import { instance } from "../axios-client";

export const upload = ({
  type,
  file,
  secondFile,
  params,
  config,
}: {
  type: string;
  file: Blob | undefined | File | null;
  secondFile?: Blob | undefined | File | null;
  params?: Record<string, unknown>;
  config?: Record<string, unknown>;
}) => {
  if (!file) return null;
  const filename = Math.floor(Math.random() * 100).toString();
  const form = new FormData();
  form.append("file", file, filename);
  if (secondFile) {
    form.append("file", secondFile, filename);
  }
  return instance().post(`/files/upload/${type}`, form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    params,

    ...config,
  });
};
