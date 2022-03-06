
  let list = document.querySelector("parentLi");
  let childs = list.childNodes;  
    
  let segundo = childs.splice (0,1);
  segundo.parentNode.removeChild (segundo);