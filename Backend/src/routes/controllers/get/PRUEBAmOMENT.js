const moment = require('moment');

const getAlert = async(date) =>{
    const allEvents = [
        {
            "id": "e08ea229-3c0e-48af-9b1c-4d40f90d11c2",
            "name": "Ivan",
            "initialDate": "2023-05-08T00:00:00.000Z",
            "hour": "10:30",
            "finalDate": "2023-02-08T00:00:00.000Z",
            "image": null,
            "description": "prueba",
            "location": null,
            "reminder": true,
            "category": null,
            "completed": false,
            "allDates": [],
            "createdAt": "2023-07-01T14:15:29.729Z",
            "updatedAt": "2023-07-01T14:15:29.729Z",
            "UserId": null
        },
        {
            "id": "c83a2f3d-16cd-45f1-85b7-e337ac606387",
            "name": "Danny",
            "initialDate": "2023-08-26T00:00:00.000Z",
            "hour": "23:30",
            "finalDate": "2023-08-26T00:00:00.000Z",
            "image": null,
            "description": "prueba",
            "location": null,
            "reminder": true,
            "category": null,
            "completed": false,
            "allDates": [
                "2023-08-26T05:00:00.000Z"
            ],
            "createdAt": "2023-07-01T14:18:58.410Z",
            "updatedAt": "2023-07-01T14:18:58.410Z",
            "UserId": null
        },
        {
            "id": "8eb6b38c-d4d5-440a-8df4-c874804aeff9",
            "name": "aaak3doi3n",
            "initialDate": "2023-07-04T00:00:00.000Z",
            "hour": "08:00",
            "finalDate": "2023-07-28T00:00:00.000Z",
            "image": "doppwiqdqp",
            "description": "podmdwqmaks",
            "location": "pdqmqdq",
            "reminder": true,
            "category": "dpkmmqdpwq",
            "completed": false,
            "allDates": [
                "2023-07-04T05:00:00.000Z",
                "2023-07-05T05:00:00.000Z",
                "2023-07-06T05:00:00.000Z",
                "2023-07-07T05:00:00.000Z",
                "2023-07-08T05:00:00.000Z",
                "2023-07-09T05:00:00.000Z",
                "2023-07-10T05:00:00.000Z",
                "2023-07-11T05:00:00.000Z",
                "2023-07-12T05:00:00.000Z",
                "2023-07-13T05:00:00.000Z",
                "2023-07-14T05:00:00.000Z",
                "2023-07-15T05:00:00.000Z",
                "2023-07-16T05:00:00.000Z",
                "2023-07-17T05:00:00.000Z",
                "2023-07-18T05:00:00.000Z",
                "2023-07-19T05:00:00.000Z",
                "2023-07-20T05:00:00.000Z",
                "2023-07-21T05:00:00.000Z",
                "2023-07-22T05:00:00.000Z",
                "2023-07-23T05:00:00.000Z",
                "2023-07-24T05:00:00.000Z",
                "2023-07-25T05:00:00.000Z",
                "2023-07-26T05:00:00.000Z",
                "2023-07-27T05:00:00.000Z",
                "2023-07-28T05:00:00.000Z"
            ],
            "createdAt": "2023-07-01T14:22:15.678Z",
            "updatedAt": "2023-07-01T14:22:15.678Z",
            "UserId": null
        },
        {
            "id": "9ad5cbb7-31b4-4b8c-baec-2d6cfec79dfb",
            "name": "perron",
            "initialDate": "2023-07-04T00:00:00.000Z",
            "hour": "08:00",
            "finalDate": "2023-07-28T00:00:00.000Z",
            "image": "doppwiqdqp",
            "description": "podmdwqmaks",
            "location": "pdqmqdq",
            "reminder": true,
            "category": "dpkmmqdpwq",
            "completed": false,
            "allDates": [
                "2023-07-04T05:00:00.000Z",
                "2023-07-05T05:00:00.000Z",
                "2023-07-06T05:00:00.000Z",
                "2023-07-07T05:00:00.000Z",
                "2023-07-08T05:00:00.000Z",
                "2023-07-09T05:00:00.000Z",
                "2023-07-10T05:00:00.000Z",
                "2023-07-11T05:00:00.000Z",
                "2023-07-12T05:00:00.000Z",
                "2023-07-13T05:00:00.000Z",
                "2023-07-14T05:00:00.000Z",
                "2023-07-15T05:00:00.000Z",
                "2023-07-16T05:00:00.000Z",
                "2023-07-17T05:00:00.000Z",
                "2023-07-18T05:00:00.000Z",
                "2023-07-19T05:00:00.000Z",
                "2023-07-20T05:00:00.000Z",
                "2023-07-21T05:00:00.000Z",
                "2023-07-22T05:00:00.000Z",
                "2023-07-23T05:00:00.000Z",
                "2023-07-24T05:00:00.000Z",
                "2023-07-25T05:00:00.000Z",
                "2023-07-26T05:00:00.000Z",
                "2023-07-27T05:00:00.000Z",
                "2023-07-28T05:00:00.000Z"
            ],
            "createdAt": "2023-07-01T14:22:33.884Z",
            "updatedAt": "2023-07-01T14:22:33.884Z",
            "UserId": null
        },
        {
            "id": "841470d1-e70a-4238-b965-3cfbda71b217",
            "name": "perasdron",
            "initialDate": "2023-07-06T00:00:00.000Z",
            "hour": "08:00",
            "finalDate": "2023-07-28T00:00:00.000Z",
            "image": "doppwiqdqp",
            "description": "podmdwqmaks",
            "location": "pdqmqdq",
            "reminder": true,
            "category": "dpkmmqdpwq",
            "completed": false,
            "allDates": [
                "2023-07-06T05:00:00.000Z",
                "2023-07-07T05:00:00.000Z",
                "2023-07-08T05:00:00.000Z",
                "2023-07-09T05:00:00.000Z",
                "2023-07-10T05:00:00.000Z",
                "2023-07-11T05:00:00.000Z",
                "2023-07-12T05:00:00.000Z",
                "2023-07-13T05:00:00.000Z",
                "2023-07-14T05:00:00.000Z",
                "2023-07-15T05:00:00.000Z",
                "2023-07-16T05:00:00.000Z",
                "2023-07-17T05:00:00.000Z",
                "2023-07-18T05:00:00.000Z",
                "2023-07-19T05:00:00.000Z",
                "2023-07-20T05:00:00.000Z",
                "2023-07-21T05:00:00.000Z",
                "2023-07-22T05:00:00.000Z",
                "2023-07-23T05:00:00.000Z",
                "2023-07-24T05:00:00.000Z",
                "2023-07-25T05:00:00.000Z",
                "2023-07-26T05:00:00.000Z",
                "2023-07-27T05:00:00.000Z",
                "2023-07-28T05:00:00.000Z"
            ],
            "createdAt": "2023-07-01T14:22:42.104Z",
            "updatedAt": "2023-07-01T14:22:42.104Z",
            "UserId": null
        }];
    const initialDates = [];
    const idEvents = [];
    for(let i = 0; i<allEvents.length; i++){
       let dateBefore = allEvents[i].initialDate 
       let momentDate = moment(dateBefore).subtract(0, "days").toISOString();
       let dataEvents = {date:momentDate, id:allEvents[i].id}
       initialDates.push(dataEvents)
    }for(let x = 0; x<initialDates.length; x++){
        if(initialDates[x].date === date){
            idEvents.push(initialDates[x].id)
        }
    }

    return initialDates;


}

console.log(getAlert('2023-05-08T00:00:00.000Z'))