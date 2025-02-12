export const convertTemp = (tempToConvert, fromScale = 'K', toScale = 'C') =>{
  try {
    if(tempToConvert === '' || isNaN(tempToConvert)){
      throw new Error('¡La temperatura ingresada no es un numero!');
    }

    if(fromScale === 'K' && toScale === 'C'){
      return (parseInt(tempToConvert - 273.15));
    } else if (fromScale === 'C' && toScale === 'K'){
      return (parseInt(tempToConvert + 273.15));
    } else if(fromScale === 'K' && toScale ===  'F'){
      return ((parseInt(tempToConvert) - 273.15) * 9/5) + 32;
    } else if (fromScale === 'F' && toScale === 'K'){
      return ((parseInt(tempToConvert) - 32) * 5/9) + 273.15;
    } else if (fromScale === 'F' && toScale === 'C'){
      return (parseInt(tempToConvert) - 32) * 5/9;
    } else if (fromScale === 'C' && toScale === 'F'){
      return (tempToConvert * 9/5) + 32;
    }

    //Retorna false en caso de conversion desconocida.
    return false;

  } catch (error) {
    //Guardar el error en un log en el futuro.
    console.log("Se ha producido un error: ", error);
    return false;
  }
}