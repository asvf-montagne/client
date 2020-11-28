const pages = (client) => ({
  api: {
    async climbingSchool() {
      try {
        return (await client.get('/climbing-school')).data
      } catch (error) {
        console.error('unable to get climbing school content', error)
      }
    },

    async climbingSlots() {
      try {
        return (await client.get('/climbing-slots')).data
      } catch (error) {
        console.error('unable to get climbing slots content', error)
      }
    },
  },
})

export default pages
