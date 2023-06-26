export abstract class Bootstrap{
	//Design pattern: Facade.
	abstract initialize(): Promise<string | Error>
}

