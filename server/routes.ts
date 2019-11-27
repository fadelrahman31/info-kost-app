import placeRoute from './api/placedetails'
import indekosRoute from './api/indekos'

export default function(express){
    express.use('/api/indekos',indekosRoute);
    express.use('/api/placedetails',placeRoute);
}