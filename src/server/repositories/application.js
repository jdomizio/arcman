export default class ApplicationRepository {
    constructor(logger, driver) {
        this.logger = logger || global.app.logger;
        this.driver = driver || global.app.dbDriver;
    }

    getAll = async () => {
        const { logger, driver } = this;

        logger.debug('ApplicationRepository.getAll()');
        const session = driver.session();

        try {
            const result = await session.run('MATCH (a:Application) RETURN a');
            logger.debug('getAll - result', result);

            const mappedProperties = result.records.find(rec => rec.keys.includes('a'))._fields.map(f => f.properties);
            logger.debug('mapped properties:', mappedProperties);

            return mappedProperties;
        } catch (e) {
            console.error(e);
        } finally {
            session.close();
        }
    }
}