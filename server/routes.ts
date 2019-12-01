import placeRoute from './api/placedetails'
import indekosRoute from './api/indekos'
import userRoute from './user'
import accountRoute from './api/account'

export default function(express){
    express.use('/api/indekos', indekosRoute);
    express.use('/api/placedetails', placeRoute);
    express.use('/api/account', accountRoute);
    express.use('/user', userRoute);
}
