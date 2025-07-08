using System;
using MediatR;
using Persistence;

namespace Application.Command;

public class DeleteActivity
{
    public class Command : IRequest
    {
        public required string Id { get; set; }
    }

    public class Handler(AppDbContext context) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var activity = await context.Activities.FindAsync([request.Id], cancellationToken) ?? throw new Exception("Not Found");

            context.Remove(activity);

            await context.SaveChangesAsync(cancellationToken);
        }
    }
}
