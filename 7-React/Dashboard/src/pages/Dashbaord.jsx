import AddTasks from "../components/AddTasks"
import Layout from "../components/layout/Layout"
import TaskList from "../components/TaskList"

const Dashbaord = () => {
  return (
    <div>
      <Layout>
        <div className="flex justify-end items-center p-2">
          <AddTasks />
        </div>
        <div className="p-2">
          <TaskList />
        </div>
      </Layout>
    </div>
  )
}

export default Dashbaord
