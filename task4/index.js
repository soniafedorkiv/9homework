$(document).ready(function () {
    $("input[type='checkbox']").change() ;
      const checkedCheckboxes = $("input[type='checkbox']:checked");
      if (checkedCheckboxes.length === 3) {
        $("input[type='checkbox']").prop("disabled", true);
      }
  });  


  