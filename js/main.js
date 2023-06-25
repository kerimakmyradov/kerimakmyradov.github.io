const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const optionValue=$("<option>").val('selected').text('Select Poem');

const resetResults=()=>{
    $("#authorTitle").empty().append(optionValue);
    $("#authorTitle").prop('disabled', true);
    $("#poetry-body").empty();
    $("#poetry-body").removeClass('scrollspy');
}

const onHover=()=>{
    $("#university").addClass('text-info fs-4');
}

const onLeave=()=>{
    $("#university").removeClass('text-info fs-4');
}