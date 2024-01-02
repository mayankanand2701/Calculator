function clearInput() {
    $('#display').val('');
}
function result()
 {
    let currentValue = $('#display').val();
    let length = currentValue.length;
    let flag = false;
    let char = currentValue[length - 1];
    if (char == '+' || char == '-' || char == '*' || char == '/')
        flag = true;
    if (flag)
        $('#display').val("ERROR!");
    else
        $('#display').val(eval($('#display').val()));
}
function insertCharacter(char)
 {
    let currentValue = $('#display').val();
    let length = currentValue.length;
    let flag = false;
    if (char == '+' || char == '-' || char == '*' || char == '/')
        flag = true;
    if (length == 0) {
        if (flag)
            return;
    }
    let flagNew = false;
    let lastCharacter = currentValue[length - 1];
    if (lastCharacter == '+' || lastCharacter == '-' || lastCharacter == '*' || lastCharacter == '/')
        flagNew = true;
    if (flag && flagNew)
        $('#display').val(currentValue.substring(0, length - 1) + char);
    else
        $('#display').val($('#display').val() + char);
}