import indekosRoute from './api/placedetails'
import placeRoute from './api/indekos'

export default function(express){
    express.use('/api/indekos',indekosRoute);
    express.use('/api/placedetails',placeRoute);
}