$(function () {
  var contactUsForm = $('#contact-us-form');
  contactUsForm.on('submit', handleSubmit);

  function getFormData() {
    const fieldTypes = ['input', 'select', 'textarea'],
          formData = {}
    fieldTypes.forEach(function (fieldType) {
      contactUsForm.find($(fieldType)).each(function () {
        const field = $(this),
              fieldName = field.attr('name'),
              value = field.val();
        formData[fieldName] = value;
      })
    })
    return formData;
  }
  function handleSubmit(e) {
    e.preventDefault();
    const formData = getFormData(),
          emptyFields = Object.keys(formData).reduce(function (acc, field) {
            // validator required
            var value = formData[field];
            if (!value) acc.push(field);
            return acc;
          }, []);
    if (emptyFields.length > 0) {
      var firstEmptyField = emptyFields[0],
          element = $("[name='" + firstEmptyField + "']");
      element.focus();
      return;
    }
    //  send email
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbwj0SXWoV6QId7lZDAtlWSIrK70d9Hs4f3lTKDNLfA9vAfeha_2bjVyIA/exec",
      data: formData,
      success: function (response) {
        if(response == "成功") alert("成功發送");
      }
    });
  }
})