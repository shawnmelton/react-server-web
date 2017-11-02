import APP from '../constants/appStates'
import appRepo from '../repos/app'
import logger from './logger'

class AppService {
    setClientRenderer() {
        logger.log('AppService', 'Setting renderer to '+ APP.RENDERERS.CLIENT)
        appRepo.setRenderer(APP.RENDERERS.CLIENT)
    }

    setLoadState(b) {
        appRepo.setLoaded(b)
    }

    setServerRenderer() {
        logger.log('AppService', 'Setting renderer to '+ APP.RENDERERS.SERVER)
        appRepo.setRenderer(APP.RENDERERS.SERVER)
    }
}

const service = new AppService()
export default service