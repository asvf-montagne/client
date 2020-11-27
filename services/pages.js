const pages = (client) => ({
  api: {

    /**
     * @returns {Promise<{title: string, content: string}>}
     */
   async climbingSchool() {
     try {
       return (await client.get('/climbing-school')).data
     } catch (error) {
       console.error('unable to get climbing school content', error)
     }
   }
  }
})


export default pages
