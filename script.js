const $scoreForm = $('form')
const $score = $('#score')
let numOfBeards = 1
const $addBeardBTN = $('#add-beard')


function submitScoreClick(evt){
  
    evt.preventDefault()
        const $weightLbs = parseFloat($('#weight-lbs').val())
        const $weightounces = parseFloat($('#weight-ounces').val())
    const $harvestWeight = $weightLbs+$weightounces
        // const $beardLengthWhole = parseFloat($('#beard-length-whole').val())
        // const $beardLengthFraction = parseFloat($('#beard-length-fraction').val())
    const $beardLength = getBeardVals()

        // const $spurLengthWhole = parseFloat($('#spur-length-whole').val())
        // const $spurLengthFraction = parseFloat($('#spur-length-fraction').val())
    const $spurLength = getSpurVals()

    console.log(`Harvest Weight (${$harvestWeight}) + Beard Length (${$beardLength} * 2) + Spur Length (${$spurLength} * 10)`)

    calculateTurkeyScore($harvestWeight,$beardLength,$spurLength)
   
}

$('select').on('change', submitScoreClick)

function calculateTurkeyScore(weight,beardLength,spurLength){

    const finalScore = weight + (beardLength * 2) + (spurLength * 10);
    console.log(finalScore)
    

    $score.text(finalScore) 
}

function addBeardClick (evt){
    numOfBeards ++ 
    const newBeard = 
                    `
            <div id="beard${numOfBeards}">
                <select required name="beard-length-whole" class="beard-length-whole">
                    <option value="0">Inches</option>
                    <option value=".0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                </select> 
                
                <select required name="beard-legth-fraction" class="beard-length-fraction">
                    <option value="0">Fraction</option>
                    <option value=".0">0/16</option>
                    <option value=".0625">1/16</option>
                    <option value=".125">2/16</option>
                    <option value=".1875">3/16</option>
                    <option value=".25">4/16</option>
                    <option value=".3125">5/16</option>
                    <option value=".375">6/16</option>
                    <option value=".4375">7/16</option>
                    <option value=".5">8/16</option>
                    <option value=".5625">9/16</option>
                    <option value=".625">10/16</option>
                    <option value=".6875">11/16</option>
                    <option value=".75">12/16</option>
                    <option value=".8125">13/16</option>
                    <option value=".875">14/16</option>
                    <option value=".9375">15/16</option>
                </select>
                <button id = "remove">X</button>
            </div>
                   `
    const beardsDiv = $('#beards')
    
    beardsDiv.append(newBeard)
}

$addBeardBTN.on('click', addBeardClick)

function getBeardVals(){
    let beardTotals = 0
    const beardWholeNums = $(".beard-length-whole")
    const beardFractions = $(".beard-length-fraction")
    for (let num of beardWholeNums){
        // console.log(parseFloat(num.value))
        beardTotals += parseFloat(num.value)
        // console.log(beardTotals)
    }
    for (let num of beardFractions){
        // console.log(parseFloat(num.value))
        beardTotals += parseFloat(num.value)
        // console.log(beardTotals)
    }
    return beardTotals
}

function getSpurVals(){
    let spurTotals = 0
    const spurWholeNums = $(".spur-length-whole")
    const spurFractions = $(".spur-length-fraction")
    for (let num of spurWholeNums){
        // console.log(parseFloat(num.value))
        spurTotals += parseFloat(num.value)
        // console.log(beardTotals)
    }
    for (let num of spurFractions){
        // console.log(parseFloat(num.value))
        spurTotals += parseFloat(num.value)
        // console.log(beardTotals)
    }
    return spurTotals
}

function removeBeard(evt){
    console.log(evt.target)
    $(evt.target).parent().remove()
}

$($scoreForm).on('click', '#remove', removeBeard)