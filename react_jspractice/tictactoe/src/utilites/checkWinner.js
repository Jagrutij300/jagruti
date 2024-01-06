

function checkWinner(player,stateArr){
    //row 1
    if(stateArr[0]===player && stateArr[1]===player && stateArr[2]===player)
    {
       return true;
    }
    else if(stateArr[1]===player && stateArr[4]===player && stateArr[8]===player){
       return true;
    }
    else if (stateArr[6]===player && stateArr[7]===player && stateArr[8]===player){
       return true;
    }
    else if (stateArr[2]===player && stateArr[4]===player && stateArr[6]===player){
       return true;
    }
    else if (stateArr[0]===player && stateArr[3]===player && stateArr[6]===player){
       return true;
   }
   else if (stateArr[1]===player && stateArr[4]===player && stateArr[7]===player){
   return true;
   }
   else if (stateArr[2]===player && stateArr[5]===player && stateArr[8]===player){
       return true;
       }
    }



    export default checkWinner;