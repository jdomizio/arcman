import ApplicationRepository from '../repositories/application';

export default function ResolverFactory() {
    const applicationsRepo = new ApplicationRepository();

    return {
        Query: {
            allApplications: applicationsRepo.getAll,
        },
    };
}
