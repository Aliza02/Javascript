const datagps= {
    "companyDetails": {
        "company": "",
        "email": "",
        "website": "",
        "phone": ""
    },
    "fileFormat": "gpx",
    "videoTitle": "video_2s_1600x1200_5fps_10f_aamir.mp4",
    "videoMetaData": {
        "frameRate": 5,
        "lengthInSeconds": 2,
        "resolution": [
            1600,
            1200
        ]
    },
    "coordinate_per_frame": {
        "9": {
            "lat": 43.638665,
            "long": -79.378557,
            "frame": 9
        },
        "8": {
            "lat": 43.639192,
            "long": -79.378358,
            "frame": 8
        },
        "7": {
            "lat": 43.63943,
            "long": -79.37784,
            "frame": 7
        },
        "6": {
            "lat": 43.64003,
            "long": -79.375879,
            "frame": 6
        },
        "5": {
            "lat": 43.640793,
            "long": -79.376704,
            "frame": 5
        },
        "4": {
            "lat": 43.641672,
            "long": -79.375823,
            "frame": 4
        },
        "3": {
            "lat": 43.642013,
            "long": -79.37461,
            "frame": 3
        },
        "2": {
           "lat": 43.642985,
            "long": -79.375562,
            "frame": 2
        },
        "1": {
            "lat": 43.643099,
            "long": -79.375586,
            "frame": 1
        },
        "0": {
            "lat": 43.646342,
            "long": -79.376643,
            "frame": 0
        }
    }
}

let sum=0,average;
let size=Object.keys(datagps.coordinate_per_frame).length;
for(let i=0; i<size; i++)
{
 sum+=datagps.coordinate_per_frame[i].lat;
}
average=sum/size;
console.log(average);