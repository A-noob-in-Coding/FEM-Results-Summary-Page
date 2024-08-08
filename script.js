fetch("./data.json")
    .then(response => response.json())  
    .then(data=>{
        console.log(data)
        let reaction_score = data[0].score
        let memory_score = data[1].score
        let verbal_score = data[2].score
        let visual_score = data[3].score
        document.getElementById("reaction-span").innerText = reaction_score
        document.getElementById("memory-span").innerText = memory_score
        document.getElementById("verbal-span").innerText = verbal_score
        document.getElementById("visual-span").innerText = visual_score
        let totalScore = Math.floor((reaction_score+verbal_score+visual_score+memory_score)/4)
        document.getElementById("total-stat").innerText = totalScore
    })
