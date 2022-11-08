function check_username()
{
    var str = document.getElementById("zh_input").value;
    var tmp_ua = "admin"
    if (str !== tmp_ua)
    {
        alert("用户名错误！");
    }
}
function check_password()
{
    var str = document.getElementById("mm_input").value;
    var tmp_ua = "123456"
    if (str !== tmp_ua)
    {
        alert("密码错误！");
    }
}
function logins()
{
    window.location.href="https://www.baidu.com";
}

function login()
{
    log = window.open("./7-2-2.html","_blank","scrollbars = yes,width = 1000,height=1000");
    log.focus();
}

function register()
{
    reg = window.open("./7-2-1.html","_blank","scrollbars = yes,width = 1000,height=1000")
}