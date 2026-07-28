type BookModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  author: string;
  image: string;
  totalPages: string;
};

export default function BookModal({
  isOpen,
  onClose,
  title,
  author,
  image,
  totalPages,
}: BookModalProps) {
  if (!isOpen) return null;
  return (
    <>
      <div>
        <div></div>
      </div>
    </>
  );
}
