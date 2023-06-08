
        export default async function() {
          let { message } = await import('third-party');
          return message()
        }
        