function regraDeTrês()
{
  let a = document.getElementById("a");
  let b = document.getElementById("b");
  let c = document.getElementById("c");
  let d = document.getElementById("d");
  
  let va = parseInt(a.value);
  let vb = parseInt(b.value);
  let vc = parseInt(c.value);
  let vd = parseInt(0);
  
  if(!isNaN(va)&&!isNaN(vb)&&!isNaN(vc)){
    if(va != 0){
      vd = (vc*vb)/va;
      d.textContent = vd;
    }
    else{
      d.textContent = "Erro: A não pode ser igual a 0";
    }
  }
  else{
    d.textContent = "Erro: os valores precisam ser numéricos";
  }
}