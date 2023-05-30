export interface Field {
    id: number,
    name: string,
    longitude: number,
    latitude: number,
    actualCropType: string,
    device: {
        id: number,
        externalDeviceId: string,
        active: boolean
    }
}