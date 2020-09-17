const { createContainer, asValue, asClass, InjectionMode, Lifetime } = require('awilix');
function getScope() {
    return { Lifetime : Lifetime.SINGLETON }
}

const container = createContainer({injectionMode: InjectionMode.CLASSIC});

container.register({
    
})
