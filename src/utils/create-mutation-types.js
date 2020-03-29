export const createMutationTypes = (mutationTypeName) => ({
    IN_PROGRESS: `${mutationTypeName}_IN_PROGRESS`,
    SUCCESS: `${mutationTypeName}_SUCCESS`,
    ERROR: `${mutationTypeName}_ERROR`,
    RESET: `${mutationTypeName}_RESET`
});
