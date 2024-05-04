using System;
using KorvonBazar.Domain.Interfaces;

namespace KorvonBazar.Domain.Users;

public interface IUserRepository : IRepository<User>
{
    User NewUser(string userName, string email);
}

