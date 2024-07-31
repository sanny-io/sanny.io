'use server'

export async function publish() {
  const existingDeploymentResponse = await fetch(`https://api.vercel.com/v13/deployments/${process.env.NEXT_PUBLIC_DEPLOYED_HOST}`, {
    headers: {
      Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
    },
  })

  const existingDeploymentJson: { id: string } = await existingDeploymentResponse.json()

  await fetch('https://api.vercel.com/v13/deployments?forceNew=1', {
    method: 'post',

    body: JSON.stringify({
      name: process.env.VERCEL_PROJECT_SLUG,
      deploymentId: existingDeploymentJson.id,
      target: 'production',
    }),

    headers: {
      Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
    },
  })
}