export interface IEntity<Properties, PropertiesUpdate> {
	propierties: () => Properties
	delete: () => void
	update: (fields: PropertiesUpdate) => void
}
