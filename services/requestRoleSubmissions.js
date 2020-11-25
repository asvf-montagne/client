import roles from '@helpers/roles'

const requestRoleSubmissions = (client) => ({
  api: {
    async create({ role = roles.editor.id }) {
      try {
        return await client.post('/request-role-submissions', { role })
      } catch (error) {
        return error.response
      }
    },

    async hasAlreadyQuestRole({ userId, role }) {
      try {
        const res = await client.get('/request-role-submissions', {
          params: { user: userId, role },
        })

        return res.status === 200 && res.data.length === 1
      } catch (error) {
        return false
      }
    },
  },
})

export default requestRoleSubmissions
