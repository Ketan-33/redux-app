import { Stack } from "expo-router";
import UserProvider from "./context/UserProvider";
const MainApplication = () => (
    <UserProvider >
        <Stack screenOptions={{
            headerShown: false
        }} />
    </UserProvider>)
export default MainApplication