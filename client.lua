local spawn1 = false							

AddEventHandler("playerSpawned", function () 	
	if not spawn1 then
		spawn1 = true
		Citizen.CreateThread(function()
			Citizen.Wait(20000)
			ShutdownLoadingScreenNui()
		end)
	end
end)