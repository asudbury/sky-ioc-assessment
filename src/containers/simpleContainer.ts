class SimpleContainer {
  private services: Map<any, any>;
  private singletons: Map<any, any>;

  constructor() {
    this.services = new Map();
    this.singletons = new Map();
  }

  register(name: string, definition: any, dependencies: any) {
    this.services.set(name, {
      definition: definition,
      dependencies: dependencies,
    });
  }

  singleton(name: string, definition: any, dependencies: any) {
    this.services.set(name, {
      definition: definition,
      dependencies: dependencies,
      singleton: true,
    });
  }

  resolve(name: string): any {
    const c = this.services.get(name);

    if (this.isClass(c.definition)) {
      if (c.singleton) {
        const singletonInstance = this.singletons.get(name);
        if (singletonInstance) {
          return singletonInstance;
        } else {
          const newSingletonInstance = this.createInstance(c);
          this.singletons.set(name, newSingletonInstance);
          return newSingletonInstance;
        }
      }

      return this.createInstance(c);
    } else {
      return c.definition;
    }
  }

  getResolvedDependencies(service: { dependencies: any[] }) {
    let classDependencies: any[] = [];
    if (service.dependencies) {
      classDependencies = service.dependencies.map((dep) => {
        return this.resolve(dep);
      });
    }
    return classDependencies;
  }

  createInstance(service: any) {
    return new service.definition(this.getResolvedDependencies(service));
  }

  isClass(definition: any) {
    return typeof definition === "function";
  }
}

export default SimpleContainer;
