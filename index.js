


function nowServing(joeDeli){
  if (joeDeli.length ===0){
    return `There is nobody waiting to be served!`
  }else{
    return `Currently serving ${joeDeli.shift()}.`
  }
}

function takeANumber(joeDeli, name){
  joeDeli.push(name)
  return `Welcome, ${name}. You are number ${joeDeli.length} in line.`
}
function takeANumber( name){
  joeDeli.push(name)
  return `Welcome, You are number ${joeDeli.length} in line.`
}


function currentLine(joeDeli){
  let line = ""
  if (joeDeli.length ===0){
    line = "The line is currently empty."
  }else{

    let newJoeDeli = []
   for (let i = 0; i < joeDeli.length; i++){
      newJoeDeli[i] =`${i+1}. ${joeDeli[i]}`
   }

   line =  "The line is currently: " + newJoeDeli.join(', ')
  }
 return line
}
