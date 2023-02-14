function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5whKAyxEZf5":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbzD_rCWWDLXFMrDl9aXslIB9Xken59QY-LHAjHl3gGtDbnLvyvlnGSMUmWbQva6eT2x/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

