import Swal from "sweetalert2";

export const SwalHooks = () => {
  const SwalSucces = ({
    title = "Success !",
    text = "You clicked the button!",
  }) => {
    return Swal.fire({
      title: title,
      text: text,
      icon: "success",
    });
  };

  const SwalFail = ({
    title = "Error !",
    text = "You clicked the button!",
  }) => {
    return Swal.fire({
      title: title,
      text: text,
      icon: "error",
    });
  };

  const SwalConfirm = ({ text = "You won't be able to revert this!" }) => {
    return Swal.fire({
      title: "Are you sure?",
      text: text,
      icon: "warning",
      showCancelButton: true,
      // confirmButtonColor: "#3085d6",
      // cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        return true;
      }
      return false;
    });
  };

  return { SwalSucces, SwalFail, SwalConfirm };
};
