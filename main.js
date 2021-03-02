function get_para()
{
    var inputs = [];
}
for(var i = 1 ; i <=6 ; i++)
{
    inputs.push(document.getElementById("get_para_input_box" + i).value);
    inputs.join(" . ");
    document.getElementById("showParagraph1").innerHTML = inputs.join(" . ");
}