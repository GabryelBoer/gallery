import * as C from "./styles";
import { BsFillTrashFill as TrashIcon } from "react-icons/bs";
type Props = {
  url: string;
  name: string;
  deleteImage: (name: string) => void;
};
export const PhotoItem = ({ url, name, deleteImage }: Props) => {
  const handleDelete = () => {
    deleteImage(name);
  };

  return (
    <C.Container>
      <img src={url} alt={name} />
      {name}
      <C.DelButton onClick={handleDelete}>
        <TrashIcon />
      </C.DelButton>
    </C.Container>
  );
};
