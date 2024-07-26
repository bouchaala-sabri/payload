'use client'

import { usePathname } from 'next/navigation.js'
import React from 'react'

import { useAuth } from '../../providers/Auth/index.js'
import { RenderMappedComponent } from '../../providers/ComponentMap/RenderMappedComponent.js'
import { useComponentMap } from '../../providers/ComponentMap/index.js'
import { useConfig } from '../../providers/Config/index.js'
import { DefaultAccountIcon } from './Default/index.js'
import { GravatarAccountIcon } from './Gravatar/index.js'

export const Account = () => {
  const {
    admin: {
      avatar,
      routes: { account: accountRoute },
    },
    routes: { admin: adminRoute },
  } = useConfig()

  const { componentMap } = useComponentMap()

  const { user } = useAuth()
  const pathname = usePathname()

  const isOnAccountPage = pathname === `${adminRoute}${accountRoute}`

  if (componentMap.CustomAvatar?.Component) {
    return (
      <RenderMappedComponent
        clientProps={{
          active: isOnAccountPage,
        }}
        component={componentMap.CustomAvatar}
      />
    )
  }

  if (!user?.email || avatar === 'default') return <DefaultAccountIcon active={isOnAccountPage} />
  if (avatar === 'gravatar') return <GravatarAccountIcon />
}
