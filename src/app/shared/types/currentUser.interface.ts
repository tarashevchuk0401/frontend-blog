export interface CurrentUser {
    users: [
          {
            localId: string
            email: string,
            emailVerified: boolean,
            displayName: string,
            providerUserInfo: [
              {
                providerId: string,
                displayName: string,
                photoUrl: string,
                federatedId: string,
                email: string,
                rawId: string,
                screenName: string
              }
            ],
            photoUrl: string
            passwordHash: string
            passwordUpdatedAt: any,
            validSince: string,
            disabled: boolean,
            lastLoginAt: string,
            createdAt: string,
            customAuth: boolean
          }
        ]  
}