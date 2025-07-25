import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities/')
      .then(response => setActivities(response.data))

    return () => { }
  }, [])

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.find(x => x.id === id));
  }

  const handleSubmitForm = (activity: Activity) => {
    let newActivity: Activity;
    if(activity.id) {
      setActivities(activities.map(x => x.id === activity.id ? activity : x))
      newActivity = activity
    } else {
      newActivity = {...activity, id: activities.length.toString()}
      setActivities([...activities, newActivity])
    }
    setSelectedActivity(newActivity)
    setEditMode(false)
  }

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined)
  }

  const handleOpenForm = (id? : string) => {
      if(id) handleSelectActivity(id)
        else handleCancelSelectActivity()
      setEditMode(true)
  }

  const handleFormClose = () => {
      setEditMode(false)
  }

  const handleDelete = (id: string) => {
    setActivities(activities.filter(x => x.id !== id))
  }

  return (
    <Box sx={{bgcolor: "#eeeeee"}}>
      <CssBaseline />
      <NavBar openForm={handleOpenForm} />
      <Container maxWidth='xl' sx={{mt: 3}}>
        <ActivityDashboard 
        activities={activities}
        selectActivity={handleSelectActivity}
        cancelSelectedActivity={handleCancelSelectActivity}
        selectedActivity={selectedActivity}
        openForm={handleOpenForm}
        closeForm={handleFormClose}
        editMode={editMode}
        submitForm={handleSubmitForm}
        deleteActivity={handleDelete}
        />
      </Container>

    </Box>
  )
}

export default App
