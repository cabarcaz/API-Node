// Desing pattern: Singleton
export abstract class DTO<Properties, DTO> {
	abstract execute(data: Properties): DTO
}
