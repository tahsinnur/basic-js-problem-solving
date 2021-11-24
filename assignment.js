/* ---Problem 1--- */

function seerToMon(seer){
    if(seer < 0 || typeof(seer) != "number"){
        return 'Please Give a valid positive number';
    }
    else{
        let mon = seer / 40;
        return mon;
    }
}

const findMon = seerToMon(400);
console.log(findMon);


/* ---Problem 2--- */

function totalSales(shirtQuantity, pantQuantity, shoeQuantity){
    const shirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 500;

    /* input validation check */
    if(typeof(shirtQuantity) != "number" || typeof(pantQuantity) != "number" || typeof(shoeQuantity) != "number"){
        return 'Please give a number type input';
    }
    else if(shirtQuantity < 0 || pantQuantity < 0 || shoeQuantity < 0){
        return 'Please give a positive number input';
    }
    else{
        totalCostOfShirt = shirtQuantity * shirtPrice;
        totalCostOfPant = pantQuantity * pantPrice;
        totalCostOfShoe = shoeQuantity * shoePrice;

        totalCost = totalCostOfShirt + totalCostOfPant + totalCostOfShoe;

        return totalCost;
    }

}

const findCost = totalSales(3, 3, 0);
console.log(findCost);

/* ---Problem 3--- */

function deliveryCost(shirtQuantity){
    const deliveryCostFor1To100 = 100;
    const deliveryCostFor101To200 = 80;
    const deliveryCostForOver200 = 50;


    /* input validation check */
    if(shirtQuantity < 0 || typeof(shirtQuantity)!= "number"){
        return 'Please Give a valid positive number';
    }
    else{
        if(shirtQuantity <= 100){
            totalDeliveryCost = shirtQuantity * deliveryCostFor1To100;
    
            return totalDeliveryCost;
        }
        else if(shirtQuantity > 100 && shirtQuantity <= 200){
            const shirtDeliveryCostUpTo100 = 100 * deliveryCostFor1To100;

            const restShirtDeliveryCost = (shirtQuantity - 100) * deliveryCostFor101To200;
    
            totalDeliveryCost = shirtDeliveryCostUpTo100 + restShirtDeliveryCost;
            
            return totalDeliveryCost;
        }
        else{
            const shirtDeliveryCostUpTo100 = 100 * deliveryCostFor1To100;

            const shirtDeliveryCostUpTo200 = 100 * deliveryCostFor101To200;

            const restShirtDeliveryCost = (shirtQuantity - 200) * deliveryCostForOver200;
    
            totalDeliveryCost = shirtDeliveryCostUpTo100 + shirtDeliveryCostUpTo200 + restShirtDeliveryCost;
    
            return totalDeliveryCost;
        }

    }

}

const deliveryCharge = deliveryCost(201);
console.log(deliveryCharge);

/* ---Problem 4--- */

function perfectFriend(names){
    
    let perfect = names[0];

    for(let i = 0; i < names.length; i++){
        const element = names[i];

        /* input validation check */
        /* we know a meaningful name should have at least two letter and type should be string */
        if(element.length <= 1 || typeof(element) != "string"){
            return 'Invalid Names';
        } 
        else if(element.length == 5){
            perfect = element;
            break;
        } 
    }
    return perfect;
}

const friends = ['Araf', 'Shahrukh','Tahsin', 'Nafiz', 'Fahim', 'Rony'];
const findPerfectFriend = perfectFriend(friends);
console.log(findPerfectFriend);