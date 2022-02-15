setTick(async () => {
    let veh = GetVehiclePedIsIn(GetPlayerPed(-1))
    console.log(GetEntityModel(veh))
});