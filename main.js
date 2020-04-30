var calc = document.getElementById("calcbtn")

calc.addEventListener("click",calculate)

function calculate()
{
    var boxw = document.getElementById("boxw").value
    var boxl = document.getElementById("boxl").value
    var boxh = document.getElementById("boxh").value

    var contw = document.getElementById("contw").value
    var contl = document.getElementById("contl").value
    var conth = document.getElementById("conth").value

    var unitboxw = document.getElementById("unitboxw").value
    var unitboxl = document.getElementById("unitboxl").value
    var unitboxh = document.getElementById("unitboxh").value
    var unitcontw = document.getElementById("unitcontw").value
    var unitcontl = document.getElementById("unitcontl").value
    var unitconth = document.getElementById("unitconth").value



    if(!boxw||!boxl||!boxh||!contw||!contl||!conth)
    {
        alert("Please enter a value in all fields")
    }

    else{
        var resShort = document.getElementById("shortSide")
        var resLong = document.getElementById("longSide")

        if(unitboxw.localeCompare("cm")!=0)
        {
            boxw = converttocm(boxw, unitboxw)
        }
        if(unitboxl.localeCompare("cm")!=0)
        {
            boxl = converttocm(boxl, unitboxl)
        }
        if(unitboxh.localeCompare("cm")!=0)
        {
            boxh = converttocm(boxh, unitboxh)
        }
        if(unitcontw.localeCompare("cm")!=0)
        {
            contw = converttocm(contw, unitcontw)
        }
        if(unitcontl.localeCompare("cm")!=0)
        {
            contl = converttocm(contl, unitcontl)
        }
        if(unitconth.localeCompare("cm")!=0)
        {
            conth = converttocm(conth, unitconth)
        }
        


        var x = sortIt(boxl, boxw)
        boxl = x[0]
        boxw = x[1]
        x = sortIt(contl, contw)
        contl = x[0]
        contw = x[1]

        var noinLl = contl/boxl
        var noinBl = contw/boxw
        remLl = noinLl - Math.floor(noinLl)
        remBl = noinBl - Math.floor(noinBl)
        totl = Math.floor(noinLl)*Math.floor(noinBl)
        
        var noinLs = contl/boxw
        var noinBs = contw/boxl
        remLs = noinLs - Math.floor(noinLs)
        remBs = noinBs - Math.floor(noinBs)
        tots = Math.floor(noinLs)*Math.floor(noinBs)

        var noinH = conth/boxh
        var remH = noinH - Math.floor(noinH)
        var borders, borderl

        if(tots>totl)
        {
            borders = 'style="border: 1px solid green; padding: 20px"'
            borderl = 'style="border: none;"'
        }
        else if(totl<tots){
            borderl = 'style="border: 1px solid green; padding: 20px"'
            borders = 'style="border: none;"'
        }

        resShort.innerHTML=`
                            <div class="containerDraw">  
                                <p class="showLength">${contl} cm</p>
                                <p class="showWidth">${contw} cm</p>
                                <div class="boxDrawShort">
                                    <p class="showLength">${boxw} cm</p>
                                    <p class="showWidth">${boxl} cm</p>
                                </div>
                            </div>
                            <p>No in Height : <strong>${Math.floor(noinH)}</strong></p>
                            <p>No in Length : <strong>${Math.floor(noinLs)}</strong></p>
                            <p>No in Width : <strong>${Math.floor(noinBs)}</strong></p>
                            <p>Total per layer: <strong>${tots}</strong></p>
                            <p>Total Number of Boxes in container : <strong>${Math.floor(noinLs)*Math.floor(noinBs)*Math.floor(conth/boxh)}</strong></p>

                            <p>Remaining Space : <br><strong>Width : ${remLs*100}% box<br>Length : ${remBs*100}% box<br>Height : ${remH*100}</strong></p>
                            `

        resLong.innerHTML = `
                            <div class="containerDraw">
                                <p class="showLength">${contl} cm</p>
                                <p class="showWidth">${contw} cm</p>
                                <div class="boxDrawLong">
                                    <p class="showLength">${boxl} cm</p>
                                    <p class="showWidth">${boxw} cm</p>
                                </div>
                            </div>    
                            <p>No in Height : <strong>${Math.floor(noinH)}</strong></p>
                            <p>No in Length : <strong>${Math.floor(noinLl)}</strong></p>
                            <p>No in Width : <strong>${Math.floor(noinBl)}</strong></p>
                            <p>Total per layer : <strong>${totl}</strong></p>
                            <p>Total Number of Boxes in container : <strong>${Math.floor(noinLl)*Math.floor(noinBl)*Math.floor(conth/boxh)}</strong></p>

                            <p>Remaining Space : <br><strong>Width : ${remLl*100}% box<br>Length : ${remBl*100}% box<br>Height : ${remH*100}</strong></p>`

    }
}

function converttocm(value, unit)
{
    if(unit.localeCompare("inch")==0)
    {
        value = 2.54*value
        return value
    }

    else if(unit.localeCompare("ft")==0)
    {
        value = 30.48*value
        return value
    }
}

function sortIt(a,b)
{
    if(b>a)
    {
        return [b,a]
    }
    else{
        return[a,b]
    }
}